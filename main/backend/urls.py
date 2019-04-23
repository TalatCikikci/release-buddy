from django.urls import path
from .views import GoalListCreate, ThemeListCreate


urlpatterns = [
    path('api/goal/', GoalListCreate.as_view()),
    path('api/theme/', ThemeListCreate.as_view()),
]
