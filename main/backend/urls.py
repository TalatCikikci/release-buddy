from django.urls import path, include

from .views import GoalListCreate, ThemeListCreate, Registration, Login, User


urlpatterns = [
    path('auth/', include('knox.urls')),
    path('goal/', GoalListCreate.as_view()),
    path('theme/', ThemeListCreate.as_view()),
    path('auth/register/', Registration.as_view()),
    path('auth/login/', Login.as_view()),
    path('auth/user/', User.as_view()),
]
