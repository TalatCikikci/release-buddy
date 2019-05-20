from django.shortcuts import redirect
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from knox.models import AuthToken

from .models import Goal, Theme
from .serializes import GoalSerializer, ThemeSerializer, UserSerializer, CreateUserSerializer, LoginUserSerializer


def redirect_view(request):
    response = redirect('/release-buddy/')
    return response


# Create your views here.
class GoalListCreate(generics.ListCreateAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
#    permission_classes = (IsAuthenticated,)


class ThemeListCreate (generics.ListCreateAPIView):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer
#    permission_classes = (IsAuthenticated,)


class Registration(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })


class Login(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })


class User(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
