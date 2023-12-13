import flask
import database
import utils
import datetime

from models.dish import Dish

# initilize the blueprint with CRUID endpoints for the Dish Resource

blueprint = flask.Blueprint("dishes",__name__)

# $ curl --location --request GET 'http://127.0.0.1:8080/movies'
@blueprint.route("/", methods=["GET"])
def get_dishes():
    # Initialize a default limit value. The limit value defines the quantity of
    # maximum allowable records we will retrieve from the database.
    # For instance, with a limit of 15, we will retrieve at most 15 records
    # from the database.
    limit = 10
    if "limit" in flask.request.args:
        limit = flask.request.args["limit"]

    # Retrieve movie records from the database.
    dishes = database.db.session.query(Dish).order_by(Dish.id).limit(limit).all()
    # Convert the Movie database records (SQLAlchemy Objects) into a JSON
    # object response.
    return flask.jsonify(utils.serialize_sqlalchemy_objects_to_dictionary(dishes))


@blueprint.route("/", methods=["POST"])
def create_dish():
    # Parse the JSON data in the request's body.
    dish_data = flask.request.get_json()

    # Validate that the client provided all required fields.
    required_fields = ["name", "cuisine", "date_made"]
    for field in required_fields:
        # If a required field is missing, return a 400 (Bad Request) HTTP
        # Status Code to clients, signifying that we received a bad request.
        if field not in dish_data:
            flask.abort(400, description=f"{field} cannot be blank.")

    # Initialize and populate a Dish object with the data submitted by the client.
    dish = Dish()
    dish.name = dish_data["name"]
    dish.cuisine = dish_data["cuisine"]
    dish.date_made = datetime.datetime.strptime(
        dish_data["date_made"], "%m/%d/%Y"
    ).date()


    # Add the Movie to the database and commit the transaction.
    database.db.session.add(dish)
    database.db.session.commit()

    # Convert the Movie database record (SQLAlchemy Object) into a JSON object response.
    return flask.jsonify(utils.serialize_sqlalchemy_object_to_dictionary(dish))


    # $ curl --location --request GET 'http://127.0.0.1:5000/movies/1'
@blueprint.route("/<int:dish_id>", methods=["GET"])
def get_dish(dish_id):
    # Attempt to retrieve a Movie record with the client-provided Movie ID.
    dish = database.db.session.get(Dish, dish_id)
    # If we cannot find a Movie record with the Movie ID provided, return a 404
    # (Not Found) HTTP Status Code to clients, signifying that we did not find
    # the record.
    if not dish:
        flask.abort(404, description=f"Dish {dish_id} not found.")

    # Convert the Movie database record (SQLAlchemy Object) into a JSON object response.
    return flask.jsonify(utils.serialize_sqlalchemy_object_to_dictionary(dish))

# $ curl --location --request DELETE 'http://127.0.0.1:5000/movies/1'
@blueprint.route("/<int:dish_id>", methods=["DELETE"])
def delete_dish(dish_id):
    # Attempt to retrieve a Movie record with the client-provided Movie ID.
    dish = database.db.session.get(Dish, dish_id)
    if not dish:
        # If we cannot find a Movie record with the Movie ID provided, return a 404
        # (Not Found) HTTP Status Code to clients, signifying that we did not find
        # the record.
        flask.abort(404, description=f"Dish {dish_id} not found.")

    # Remove the Movie from the database and commit the transaction.
    database.db.session.delete(dish)
    database.db.session.commit()

    # Convert the Movie database record (SQLAlchemy Object) into a JSON object response.
    return flask.jsonify(utils.serialize_sqlalchemy_object_to_dictionary(dish))