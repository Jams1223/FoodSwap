import flask
import os
import typing
import configuration
import database
import login_manager

from views.auth import blueprint as auth_blueprint
from views.dish import blueprint as dish_blueprint
from views.order import blueprint as order_blueprint
from views.testing import blueprint as testing_blueprint

def bad_request(error: typing.Any) -> flask.Response:
    """
    An attachable helper function that indends to standarize the response
    clients receive whenever we respond with an HTTP Status Code of 400
    (Bad Request).
    """
    return (
        flask.jsonify(
            error={
                "code": error.code,
                "name": error.name,
                "description": error.description,
            }
        ),
        400,
    )


def dispose_database_session(_: typing.Any) -> None:
    """
    A registarable function that concludes a database session. The function
    should be called when the application context is popped. The application
    context is typically popped after the request context for each request.
    """
    database.db.session.remove()


def not_found(error: typing.Any) -> flask.Response:
    """
    An attachable helper function that indends to standarize the response
    clients receive whenever we respond with an HTTP Status Code of 404
    (Not Found).
    """
    return (
        flask.jsonify(
            error={
                "code": error.code,
                "name": error.name,
                "description": error.description,
            }
        ),
        404,
    )


def unauthorized(error: typing.Any) -> flask.Response:
    """
    An attachable helper function that indends to standarize the response
    clients receive whenever we respond with an HTTP Status Code of 401
    (Unauthorized).
    """
    return (
        flask.jsonify(
            error={
                "code": error.code,
                "name": error.name,
                "description": error.description,
            }
        ),
        401,
    )


def create_app(configuration_name: configuration.ConfigurationName) -> flask.app.Flask:
    """
    A factory function designed to create a Flask Application.
    """

    # Initialize the Flask Application.
    app = flask.Flask(__name__)

    # Load the configuration pertaining to the environment you're in
    # e.g., development, production, or testing.
    app.config.from_object(configuration.configuration[configuration_name])

    # Initialize the database extension within the instance of the application.
    # Extensions are quite a prominent pattern in Flask and are covered in much
    # detail here: https://flask.palletsprojects.com/en/2.2.x/extensiondev/#the-extension-class-and-initialization

    database.db.init_app(app)
    with app.app_context():
        # database.db.drop_all()
        database.db.create_all()

    # Initialize the session manager within the instance of the application.
    # The session manager is covered in detail here: https://flask-login.readthedocs.io/en/latest/
    login_manager.login_manager.init_app(app)

    # Rules that end with a slash are “branches”, others are “leaves”.
    # If strict_slashes is enabled (default), visiting a branch URL without a
    # trailing slash will redirect to the URL with a slash appended.
    app.url_map.strict_slashes = False

    # Load the "auth" routes onto the Flask Application. In loading the
    # routes, requests starting with "/auth" will be forwarded to the
    # "auth_blueprint."
    app.register_blueprint(auth_blueprint, url_prefix="/auth")

#     # Load the "actor" routes onto the Flask Application. In loading the
#     # routes, requests starting with "/actors" will be forwarded to the
#     # "actor_blueprint."
#     app.register_blueprint(actor_blueprint, url_prefix="/actors")

    app.register_blueprint(dish_blueprint,url_prefix="/dish")

    app.register_blueprint(order_blueprint,url_prefix="/order")

    app.register_blueprint(testing_blueprint,url_prefix="/test")

    print(app.url_map)

#     # Load the "movie" routes onto the Flask Application. In loading the
#     # routes, requests starting with "/movies" will be forwarded to the
#     # "movie_blueprint."
#     app.register_blueprint(movie_blueprint, url_prefix="/movies")

    # Register an error handler for 400 (Bad Request). The Flask Application
    # will call the error handler when the application returns a 400
    # HTTP Status Code.
    app.register_error_handler(400, bad_request)
    # Register an error handler for 401 (Unauthorized). The Flask Application
    # will call the error handler when the application returns a 401
    # HTTP Status Code.
    app.register_error_handler(401, bad_request)
    # Register an error handler for 404 (Not Found). The Flask Application
    # will call the error handler when the application returns a 404
    # HTTP Status Code.
    app.register_error_handler(404, not_found)
    # Register a handler that the Flask Application will call whenever the
    # application context is popped, which the application pops near the end of
    # the request.
    app.teardown_appcontext(dispose_database_session)

    return app

# Protect ourselves from accidentally invoking this file when importing.
if __name__ == "__main__":
    # Retrieve the configuration defined for the environment
    # (development, production, or testing). The environment is set via the
    # "ENVIRONMENT" environment variable. We default to the "DEVELOPMENT"
    # environment if no environment variable is set.
    configuration_name = configuration.ConfigurationName.DEVELOPMENT
    if os.environ.get("ENVIRONMENT"):
        configuration_name = os.environ.get("ENVIRONMENT")
    # Validate that the environment value set via the "ENVIRONMENT" environment
    # variable is one that we expect (development, production, or testing).
    if configuration_name not in configuration.configuration:
        raise RuntimeError(
            f'No configuration found for "{configuration_name}" environment.'
        )
    # Create the application using the "create_app" factory function created above.
    app = create_app(configuration_name)
    # Start/Run the application.
    app.run(port=8080)