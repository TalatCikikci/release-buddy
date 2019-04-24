from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Goal, Theme


class GoalSerializer (serializers.ModelSerializer):

    class Meta:
        model = Goal
        fields = '__all__'


class ThemeSerializer (serializers.ModelSerializer):

    class Meta:
        model = Theme
        fields = '__all__'


class UserSerializer (serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'
