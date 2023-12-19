from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField, BooleanField
from wtforms.fields import DateField
from wtforms.validators import DataRequired

class addDish(FlaskForm):
    dish_name = StringField(label='name',validators=[DataRequired()])
    dish_cuisine = StringField(label='cuisine',validators=[DataRequired()])
    dish_date = DateField(label='date_made',validators=[DataRequired()])
    submit = SubmitField(label='add')

class deleteDish(FlaskForm):
    id = IntegerField(label ="dish_id",validators=[DataRequired()])
    submit = SubmitField(label='Delete')

class addUser(FlaskForm):
    f_name = StringField(label='fname',validators=[DataRequired()])
    l_name = StringField(label='lname',validators=[DataRequired()])
    email = StringField(label='email',validators=[DataRequired()])
    password = StringField(label='password',validators=[DataRequired()])
    seller = BooleanField(label='seller',validators=[DataRequired()])
    submit = SubmitField(label='Create User')

class login(FlaskForm):
    email = StringField(label='email',validators=[DataRequired()])
    password = StringField(label='password',validators=[DataRequired()])
    submit = SubmitField(label='login')

class addOrder(FlaskForm):
    buyer_id = IntegerField(label ="buyer_id",validators=[DataRequired()])
    seller_id = IntegerField(label ="seller_id",validators=[DataRequired()])
    total_price = IntegerField(label ="total_price",validators=[DataRequired()])
    status = StringField(label='status',validators=[DataRequired()])
    order_date = DateField(label='order_date',validators=[DataRequired()])
    submit = SubmitField(label='Create Order')