from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Object-level permission to only allow owners of an object to edit it.
    Assumes the model instance has an `owner` attribute.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Instance must have an attribute named `user`.
        return obj.user == request.user


class AdvertisementGroupPermission(permissions.BasePermission):
    """
    Custom permission class to allow users to edit and retrieve only their own AdvertisementGroups.
    """

    def has_permission(self, request, view):
        """
        Checks if the user is authenticated (for any view access).
        """
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        """
        Returns `True` if the user owns the AdvertisementGroup (for editing/viewing specific objects).
        """
        if not request.user.is_authenticated:
            return False

        if obj:  # Check if `obj` is provided (for detail views like PUT, PATCH, DELETE)
            return obj.user == request.user
        return True  # Allow access to list views (GET) for authenticated users
