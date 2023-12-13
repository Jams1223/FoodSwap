from sqlalchemy import Column, Integer, String, Text,Date
from sqlalchemy.orm import relationship

from database import db

class Dish(db.Model):
    __tablename__ = "dishes"

    # The unique identifier for each Movie record.
    id = Column(Integer, primary_key=True, autoincrement=True)

    name = Column(String, nullable=False)

    cuisine = Column(String, nullable=False)

    date_made = Column(Date, nullable=False)

    def __repr__(self):
        return f"<Dish {self.name}>"