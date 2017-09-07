from rest_framework import permissions

ADMIN_NAME = 'sns_admin'


class IsWriterOrAdminOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return (obj.writer == request.user) or (request.user.username == ADMIN_NAME)
