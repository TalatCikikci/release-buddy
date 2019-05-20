import os
from z3 import *

from .models import Goal, Theme


class SMTUtil:

    def __init__(self,
                 print_success='false',
                 produce_models='true',
                 produce_assignments='true',
                 interactive_mode='true',
                 logic='AUFNIRA'):
        self.options = "(set-option :print-success {print_success})\n" \
                       "(set-option :produce-models {produce_models})\n" \
                       "(set-option :produce-assignments {produce_assignments})\n" \
                       "(set-option :interactive-mode {interactive_mode})\n"
        self.logic = "(set-logic {logic})\n"
        self.declare_sort = "(declare-sort {} {})\n"
        self.declare_fun = "(declare-fun {} {} {})\n"
        self.assertion = "(assert {})\n"
        self.check_sat = "(check-sat)\n"
        self.get_value = "(get-value {})\n"
        self.get_assignment = "(get-assignment)\n"
        self.push = "(push {})\n"
        self.pop = "(pop {})\n"
        self.exit = "(exit)"
        self.smt_phrases = "{}"

        self.options = self.options.format(print_success=print_success,
                                           produce_models=produce_models,
                                           produce_assignments=produce_assignments,
                                           interactive_mode=interactive_mode
                                           )
        self.logic = self.logic.format(logic=logic)
        self.smt_phrases = self.smt_phrases.format(
            self.options + self.logic + self.push.format('1') + "{}" + self.exit
        )

    def add_declare_sort(self, sort_name, number_of_parameters):
        self.smt_phrases = self.smt_phrases.format(self.declare_sort.format(sort_name, number_of_parameters) + '{}')

    def add_declare_fun(self, fun_name, arguments, sort):
        self.smt_phrases = self.smt_phrases.format(self.declare_fun.format(fun_name, arguments, sort) + '{}')

    def add_assertion(self, phrase):
        self.smt_phrases = self.smt_phrases.format(self.assertion.format(phrase) + '{}')

    def add_check_sat(self):
        self.smt_phrases = self.smt_phrases.format(self.check_sat + '{}')

    def add_get_value(self, terms):
        self.smt_phrases = self.smt_phrases.format(self.get_value.format(terms) + '{}')

    def add_get_assignment(self):
        self.smt_phrases = self.smt_phrases.format(self.get_assignment + '{}')

    def add_push(self, times):
        self.smt_phrases = self.smt_phrases.format(self.push.format(times) + '{}')

    def add_pop(self, times):
        self.smt_phrases = self.smt_phrases.format(self.pop.format(times) + '{}')

    def write_phrase_to_file(self):
        with open('smt_phrases.smt2', 'w') as smt_file:
            smt_file.write(self.smt_phrases.format(''))


#
# class SolverUtil:
#
#     def __init__(self, optimization_scheme, constraints):
#         self.solver = Solver()
#         self.goals = Goal.objects.all()
#         self.themes = Theme.objects.all()
#         self.optimizationScheme = optimization_scheme
#         self.constraints = constraints
#         self.mandatory = []
#         self.cost_increase = []
#         self.cv_increase = []
#
# #    def apply_constraints(self):
# #
# #        for constraint in self.constraints:
# #            if constraint == 'Maximize Customer Value':
# #                z3.z3consts.
#
#     def get_mandatory(self):
#         for goal in self.goals:
#             if goal.mandatory:
#                 self.mandatory.append(goal)
#
#     def get_cost_increasers(self):
#         for goal in self.goals:
#             if goal.relation_increase_cost:
#                 self.cost_increase.append((goal, goal.relation_increase_cost))
#
#     def get_cv_increasers(self):
#         for goal in self.goals:
#             if goal.relation_increase_cv:
#                 self.cv_increase.append((goal, goal.relation_increase_cv))
