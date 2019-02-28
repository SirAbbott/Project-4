from flask import Blueprint, jsonify, g
from models.user import User, UserSchema
from lib.secure_route import secure_route

users_schema = UserSchema(many=True)
user_schema = UserSchema()

api = Blueprint('users', __name__)

@api.route('/users', methods=['GET'])
def user_index():
    users = User.query.all()
    return users_schema.jsonify(users)

@api.route('/users/<int:user_id>', methods=['GET'])
@secure_route
def show_secure(user_id):
    user = User.query.get(user_id)

    #Check if user can access this page
    if user != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 401

    #Return 404 if user does not exist
    if user is None:
        return jsonify({'message': 'User doesn\'t seem to exist'}), 404
    return user_schema.jsonify(user)
