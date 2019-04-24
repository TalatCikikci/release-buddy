from django.db import models


# Create your models here.
class Goal (models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    theme = models.ForeignKey('Theme', models.SET_DEFAULT, blank=True, default='')
    implemented = models.BooleanField(default=False)
    mandatory = models.BooleanField(default=False)
    relation_requires = models.ManyToManyField('self', models.SET_DEFAULT, null=True, blank=True, default='')
    relation_and = models.ManyToManyField('self', models.SET_DEFAULT, null=True, blank=True, default='')
    relation_or = models.ManyToManyField('self', models.SET_DEFAULT, null=True, blank=True, default='')
    relation_before = models.ManyToManyField('self', models.SET_DEFAULT, null=True, blank=True, default='')
    relation_increase_cv = models.ManyToManyField('self', models.SET_DEFAULT, null=True, blank=True, default='')
    relation_increase_cost = models.ManyToManyField('self', models.SET_DEFAULT, null=True, blank=True, default='')
    relation_mutex = models.ManyToManyField('self', models.SET_DEFAULT, null=True, blank=True, default='')
    relation_refinement_of = models.ForeignKey('self', models.SET_DEFAULT, null=True, blank=True, default='')
    # Retain deleted goals in the system for consistency?
    # deleted = models.BooleanField(default=False)


class Theme (models.Model):
    title = models.CharField(max_length=100)
    # Retain deleted themes in the system for consistency?
    # deleted = models.BooleanField(default=False)
