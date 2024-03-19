from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from dj_rest_auth.views import LoginView
from django.http import HttpResponseRedirect

from core.settings import (
    EMAIL_CONFIRM_REDIRECT_BASE_URL,
    PASSWORD_RESET_CONFIRM_REDIRECT_BASE_URL,
)
from dj_rest_auth.registration.views import RegisterView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status


def email_confirm_redirect(request, key):
    return HttpResponseRedirect(f"{EMAIL_CONFIRM_REDIRECT_BASE_URL}{key}/")


def password_reset_confirm_redirect(request, uidb64, token):
    return HttpResponseRedirect(
        f"{PASSWORD_RESET_CONFIRM_REDIRECT_BASE_URL}{uidb64}/{token}/"
    )


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://localhost:3000/api/auth/callback/google"
    client_class = OAuth2Client


class CustomRegisterView(RegisterView):
    # serializer_class = CustomRegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {"detail": "User created. Please verifiy E-mail."},
            status=201,
            headers=headers,
        )


class CustomLoginView(LoginView):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        if not serializer.is_valid():
            return Response(
                {"detail": f"Fail to login", "error": serializer.errors},
                status=status.HTTP_404_NOT_FOUND,
            )

        # serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        # try:
        #     user.auth_token.delete()
        # except:
        #     pass
        token, created = Token.objects.get_or_create(user=user)
        return Response(
            {
                "key": token.key,
                "detail": "Login successful",
                "email": user.email,
                "username": user.username,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "id": user.id,
            },
            status=status.HTTP_200_OK,
        )
