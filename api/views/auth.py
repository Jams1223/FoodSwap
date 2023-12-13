import flask
import flask_login
from passlib.hash import pbkdf2_sha256

import database
import login_manager
from models.user import User

# Initialize the authentication blueprint.
blueprint = flask.Blueprint("auth", __name__)

@blueprint.route("/signup", methods=["POST"])
def signup():
    # Parse the JSON data in the request's body.
    user_data = flask.request.get_json()

    # Validate that the client provided all required fields.
    required_fields = ["first_name", "last_name", "email", "password"]
    for field in required_fields:
        # If a required field is missing, return a 400 (Bad Request) HTTP
        # Status Code to clients, signifying that we received a bad request.
        if field not in user_data:
            flask.abort(400, description=f"{field} cannot be blank.")

    user = database.db.session.query(User).filter_by(email=user_data["email"]).one()
    if user:
        flask.abort(400, description=f"User already exists.")

    # Initialize and populate a User object with the data submitted by the client.
    user = User()
    user.first_name = user_data["first_name"]
    user.last_name = user_data["last_name"]
    user.email = user_data["email"]
    user.password = user_data["password"]

    # Add the User to the database and commit the transaction.
    database.db.session.add(user)
    database.db.session.commit()

    flask_login.login_user(user)

    # Convert the User database record (SQLAlchemy Object) into a JSON object response.
    return flask.jsonify(
        {
            "id": user.id,
            "first_name": user.first_name,
            "middle_name": user.middle_name,
            "last_name": user.last_name,
            "email": user.email,
        }
    )


@blueprint.route("/login", methods=["GET"])
def confirm_login():
    user = flask_login.current_user
    if not user.is_authenticated:
        flask.abort(401)

    return flask.jsonify(
        {
            "first_name": user.first_name,
            "middle_name": user.middle_name,
            "last_name": user.last_name,
            "email": user.email,
        }
    )


@blueprint.route("/login", methods=["POST"])
def login():
    # Parse the JSON data in the request's body.
    login_data = flask.request.get_json()

    # Validate that the client provided all required fields.
    required_fields = ["email", "password"]
    for field in required_fields:
        # If a required field is missing, return a 400 (Bad Request) HTTP
        # Status Code to clients, signifying that we received a bad request.
        if field not in login_data:
            flask.abort(400, description=f"{field} cannot be blank.")

    user = database.db.session.query(User).filter_by(email=login_data["email"]).one()
    if not user:
        flask.abort(401, description=f"Incorrect email or password.")
    is_correct_password = pbkdf2_sha256.verify(login_data["password"], user.password)
    if not is_correct_password:
        flask.abort(401, description=f"Incorrect email or password.")

    # https://flask-login.readthedocs.io/en/latest/
    flask_login.login_user(user)
    return flask.jsonify(
        {
            "first_name": user.first_name,
            "middle_name": user.middle_name,
            "last_name": user.last_name,
            "email": user.email,
        }
    )


@blueprint.route("/logout", methods=["POST"])
@flask_login.login_required
def logout():
    flask_login.logout_user()
    return {}


@login_manager.login_manager.user_loader
def load_user(user_id):
    return database.db.session.get(User, int(user_id))