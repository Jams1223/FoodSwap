from sqlalchemy import Column, Integer, String, Text,ForeignKey,Numeric,Date
from sqlalchemy.orm import relationship

from database import db
from models.dish import Dish
from models.user import User

class Order(db.Model):
    """
    Define a model/resource representing a Order.
    """
    __tablename__ = "orders"

    # The unique identifier for each Order record.
    id = Column(Integer, primary_key=True, autoincrement=True)

    # ForeignKey relationships with User table for buyer and seller
    buyer_id = Column(Integer, ForeignKey('users.id'))
    seller_id = Column(Integer, ForeignKey('users.id'))

   # Define relationships with User table for buyer and seller
    buyer = relationship("User", foreign_keys=[buyer_id], backref="buyer_orders")
    seller = relationship("User", foreign_keys=[seller_id], backref="seller_orders")

    total_price = Column(Numeric(10, 2))  # Example for total price (decimal with 10 digits, 2 after the decimal point)

    status = Column(String(50))  # Example for order status

    order_date = Column(Date, nullable=False)

def __repr__(self):
        return f"<Order {self.id}: Buyer - {self.buyer_id}, Seller - {self.seller_id}, Total Price - {self.total_price}, Status - {self.status}, Order Date - {self.order_date}>"