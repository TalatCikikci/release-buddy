from django.shortcuts import render
from rest_framework import generics

from .models import Goal, Theme
from .serializes import GoalSerializer, ThemeSerializer


# Create your views here.
class GoalListCreate(generics.ListCreateAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


class ThemeListCreate (generics.ListCreateAPIView):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer
