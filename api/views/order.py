import datetime 
import flask
import database
import utils
from models.dish import Dish
from models.user import User

from models.order import Order
# Initialize the blueprint with CRUD endpoints for the Movie resource.
blueprint = flask.Blueprint("orders", __name__)

# $ curl --location --request GET "http://127.0.0.1:8080/order"
@blueprint.route("/", methods=["GET"])
def get_orders():
    # Initialize a default limit value. The limit value defines the quantity of
    # maximum allowable records we will retrieve from the database.
    # For instance, with a limit of 15, we will retrieve at most 15 records
    # from the database.
    limit = 10
    if "limit" in flask.request.args:
        limit = flask.request.args["limit"]

    # Retrieve order records from the database.
    orders = database.db.session.query(Order).order_by(Order.id).limit(limit).all()

    # Convert the Movie database records (SQLAlchemy Objects) into a JSON
    # object response.
    OrderList = []
    for order in orders:
        OrderList.append(
        {
            "buyer id":order.buyer_id,
            "seller id":order.seller_id,
            "total price":order.total_price,
            "order status": order.status,
            "order date": order.order_date
        }
        )
    return OrderList


# $ curl --location --request GET "http://127.0.0.1:8080/order/1"
@blueprint.route("/<int:order_id>",methods=["GET"])
def get_order(order_id):
    order = database.db.session.get(Order,order_id)

    if not order:
        flask.abort(404,description=f"Order {order_id} not found.")


    #convert the Order database record into JSON object response
    return flask.jsonify(
        {
            "buyer id":order.buyer_id,
            "seller id":order.seller_id,
            "total price":order.total_price,
            "order status": order.status,
            "order date": order.order_date
        }
    )

# curl --location --request POST "http://127.0.0.1:8080/order" \
# --header "Content-Type: application/json" \
# --data-raw '{
#     "buyer_id": 1,
#     "seller_id": 2,
#     "total_price": 10,
#     "status": "In Route",
#     "order_date": "12/01/2023"
# }'

@blueprint.route("/",methods=["POST"])
def create_order():
    #parse the JSON data in the request body
    order_data = flask.request.get_json()

    #validate that the client provided all the required details

    required_fields = ["buyer_id","seller_id","total_price","status","order_date"]

    for field in required_fields:
        #if required field is missing then return the 400(bad request) HTTP
        if field not in order_data:
            flask.abort(400,description=f"{field} cannot be blank")

    #initialize and populate a order object with the data submitted

    order = Order()
    # order.buyer_id = database.db.session.query(User).get(order_data["buyer_id"])
    # order.seller_id = database.db.session.query(User).get(order_data["seller_id"])
    order.buyer_id = order_data["buyer_id"]
    order.seller_id = order_data["seller_id"] 
    order.total_price = order_data["total_price"]
    order.status = order_data["status"]
    order.order_date = datetime.datetime.strptime(
        order_data["order_date"], "%m/%d/%Y"
    ).date()

    #add the Order to the database and commit 

    database.db.session.add(order)
    database.db.session.commit()

    #convert the movie database record into a JSON object response

    return flask.jsonify(
        {
            "buyer id":order.buyer_id,
            "seller id":order.seller_id,
            "total price":order.total_price,
            "order status": order.status,
            "order date": order.order_date
        }
    )


