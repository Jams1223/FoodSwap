import collections
import datetime

import webtest

import sys
sys.path.append('../')
import database
# import database
import test_base 
# from test_base import TestBase

from models.dish import Dish


class DishTest(test_base,TestBase):
    def assert_response(self,response,expected_dishes):
        """
        A helper method that asserts whether an HTTP Response includes the suspected dishes IDs.
        """

        actual_ids = [int(dish["id"]) for dish in response]
        expected_ids = [int(dish.id) for dish in expected_dishes]
        self.assertCountEqual(expected_ids,actual_ids)

    def test_get_dish(self):
        # instantiate a dish object

        dish_1 = Dish(
            id = 1111,
            name = "fries",
            cuisine ="American",
            date_made = datetime.datetime(2023,12,13).date()
        )

        dish_2 = Dish(
            id = 2222,
            name = "Fried Rice",
            cuisine ="Chinese",
            date_made = datetime.datetime(2023,12,14).date()
        )

        dishes = [dish_1,dish_2]

        # Define a TestCase named tuple to simplify the construction of test cases

        TestCase = collections.namedtuple(
            "TestCase",["name","request_url","expected_dish"]
        )

        # Initialize the various test cases to be tested
        
        test_cases =[
            TestCase(
                name = "retrieve dish",
                request_url = "/dishes/"+ str(dish_1.id),
                expected_dish = dish_1,
            ),
            TestCase(
                name = "retrieve dish",
                request_url = "/dishes/"+ str(dish_2.id),
                expected_dish = dish_2,                
            ),
        ]

        with self.app.app_context():
            # Add all Actors to the database and commit the transaction.
            database.db.session.add_all(dishes)
            database.db.session.commit()        

            for test_case in test_cases:
                with self.subTest(msg=test_case.name):
                    response = self.webtest_app.get(test_case.request_url).json
                    # Assert various aspects of the response object.
                    self.assertEqual(int(response["id"]), test_case.expected_dish.id)
                    self.assertEqual(response["name"], test_case.expected_dish.name)
                    self.assertEqual(
                        response["cuisine"], test_case.expected_dish.cuisine
                    )
    def test_get_dishes(self):
            # instantiate a dish object

            dish_1 = Dish(
                id = 1111,
                name = "fries",
                cuisine ="American",
                date_made = datetime.datetime(2023,12,13).date()
            )

            dish_2 = Dish(
                id = 2222,
                name = "Fried Rice",
                cuisine ="Chinese",
                date_made = datetime.datetime(2023,12,14).date()
            )

            dishes = [dish_1,dish_2]

            # Define a TestCase named tuple to simplify the construction of test cases

            TestCase = collections.namedtuple(
                "TestCase",["name","request_url","expected_dishes"]
            )

            # initilize the various test cases we are interested in testing

            test_cases = [
                TestCase(
                    name = "retrieve dishes",
                    request_url = "/dishes",
                    expected_dish = [dish_1,dish_2],                    
                ),
                TestCase(
                    name = "retrieve dishes",
                    request_url = "/dishes?limit=1",
                    expected_dish = [dish_1],                    
                )
            ]

            with self.app.app_context():
                # Add all Actors to the database and commit the transaction.
                database.db.session.add_all(dishes)
                database.db.session.commit()        

                for test_case in test_cases:
                    with self.subTest(msg=test_case.name):
                        response = self.webtest_app.get(test_case.request_url).json
                        # Assert various aspects of the response object.
                        self.assertEqual(int(response["id"]), test_case.expected_dish.id)
                        self.assertEqual(response["name"], test_case.expected_dish.name)
                        self.assertEqual(
                            response["cuisine"], test_case.expected_dish.cuisine
                        )

