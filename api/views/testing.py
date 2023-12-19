import flask
import database
from models.dish import Dish
from models.user import User
from models.order import Order
from flask_login import login_user,current_user,logout_user
from forms import addDish,deleteDish,addUser,login,addOrder
import requests
import json
blueprint = flask.Blueprint("testing",__name__)

@blueprint.route("/",methods=['GET','POST','DELETE'])
def view():
    dishes = Dish.query.all()
    users = User.query.all()
    orders = Order.query.all()
    add_Dish_form = addDish()
    deleteDish_form = deleteDish()
    add_user_form = addUser()
    login_form = login()
    addOrder_Form = addOrder()

    
    # if login_form.validate_on_submit():
    #     r = requests.get()

    # if login_form.validate_on_submit():
    #     r = requests.post('http://127.0.0.1:8080/auth/login',json = {'email':login_form.email.data ,'_password':login_form.password.data})
    #     print(r.status_code)
    #     return flask.render_template("home.html",dishes = dishes, users = users, orders= orders,current_user=current_user,add_Dish_form=add_Dish_form,deleteDish_form=deleteDish_form,add_user_form=add_user_form,login_form=login_form)

    if addOrder_Form.validate_on_submit():
        r = requests.post('http://127.0.0.1:8080/order/', json ={'buyer_id':addOrder_Form.buyer_id.data,'seller_id':addOrder_Form.seller_id.data,'total_price':addOrder_Form.total_price.data,'status':addOrder_Form.status.data,'order_date':addOrder_Form.order_date.data})
        print(r.status_code)
        return flask.render_template("home.html",dishes = dishes, users = users, orders= orders,current_user=current_user,add_Dish_form=add_Dish_form,deleteDish_form=deleteDish_form,add_user_form=add_user_form,login_form=login_form,addOrder_Form=addOrder_Form)

    if deleteDish_form.validate_on_submit():
        r = requests.delete(f'http://127.0.0.1:8080/dish/{deleteDish_form.id.data}')
        print(r.status_code)
        return flask.render_template("home.html",dishes = dishes, users = users, orders= orders,current_user=current_user,add_Dish_form=add_Dish_form,deleteDish_form=deleteDish_form,add_user_form=add_user_form,login_form=login_form,addOrder_Form=addOrder_Form)

    if add_user_form.validate_on_submit():
        r = requests.post('http://127.0.0.1:8080/auth/signup',json = {'first_name': add_user_form.f_name.data, 'last_name':add_user_form.l_name.data,'email':add_user_form.email.data,'_password':add_user_form.password.data,'seller':add_user_form.seller.data})
        print(r.status_code)
        return flask.render_template("home.html",dishes = dishes, users = users, orders= orders,current_user=current_user,add_Dish_form=add_Dish_form,deleteDish_form=deleteDish_form,add_user_form=add_user_form,login_form=login_form,addOrder_Form=addOrder_Form)

    if add_Dish_form.validate_on_submit():
        dish_to_add = Dish(
            name = add_Dish_form.dish_name.data,
            cuisine = add_Dish_form.dish_cuisine.data,
            date_made = add_Dish_form.dish_date.data
        )
        print(dish_to_add.name)
        print(dish_to_add.cuisine)
        print(dish_to_add.date_made)
        database.db.session.add(dish_to_add)
        database.db.session.commit()
        return flask.render_template("home.html",dishes = dishes, users = users, orders= orders,current_user=current_user,add_Dish_form=add_Dish_form,deleteDish_form=deleteDish_form,add_user_form=add_user_form,login_form=login_form,addOrder_Form=addOrder_Form)

    return flask.render_template("home.html",dishes = dishes, users = users, orders= orders,current_user=current_user,add_Dish_form=add_Dish_form,deleteDish_form=deleteDish_form,add_user_form=add_user_form,login_form=login_form,addOrder_Form=addOrder_Form)