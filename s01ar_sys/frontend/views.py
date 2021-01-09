from django.shortcuts import render
from django.views import View


class index(View):
    template = 'index.html'

    def get(self, request):
        return render(request, self.template)


class pwd_manager(View):
    template = 'pwd-manager.html'

    def get(self, request):
        return render(request, self.template)
