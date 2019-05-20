from django.urls import path, include
from knox import urls

from .views import GoalListCreate, ThemeListCreate, Registration, Login, User


urlpatterns = [
    path('auth/', include(urls)),
    path('goal/', GoalListCreate.as_view()),
    path('theme/', ThemeListCreate.as_view()),
    path('register/', Registration.as_view()),
    path('login/', Login.as_view()),
    path('user/', User.as_view()),
]
