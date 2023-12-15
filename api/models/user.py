import typing

from flask_login import UserMixin
from passlib.hash import pbkdf2_sha256
from sqlalchemy import Column, Date, Integer, String, Text, Boolean
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import relationship

from database import db


class User(db.Model,UserMixin):
    __tablename__ = "users"

    # The unique identifier for each Actor record.
    id = Column(Integer, primary_key=True, autoincrement=True)

    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)

    email = Column(String, nullable=False)
    _password = Column(String, nullable=False)

    seller = Column(Boolean,nullable=False)
    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, plaintext):
        self._password = pbkdf2_sha256.hash(plaintext)