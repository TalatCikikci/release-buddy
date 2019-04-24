from django.urls import path
from .views import GoalListCreate, ThemeListCreate


urlpatterns = [
    path('goal/', GoalListCreate.as_view()),
    path('theme/', ThemeListCreate.as_view()),
]
