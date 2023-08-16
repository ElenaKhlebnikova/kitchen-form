import type { TFormFields } from '../_types';

import { RULES } from '../_constants';

export const handleRules = (formData: TFormFields) => {
  const selectedRules = formData.rules.filter(Boolean);

  const rules: string[] = [];

  RULES.map((rule) => rule.id).forEach((default_rule) => {
    if (selectedRules.includes(default_rule)) {
      rules.push(default_rule);
    } else {
      if (default_rule.startsWith('no_')) {
        rules.push(default_rule.substring(3));
      } else {
        rules.push(`no_${default_rule}`);
      }
    }
  });

  return rules;
};

export const handleFeatures = (formData: TFormFields) => {
  return formData.features.filter(Boolean);
};

export const handleLanguages = (formData: TFormFields) => {
  if (!formData.languages) return null;

  return formData.languages.filter(Boolean);
};

export const handlePrice = (formData: TFormFields) => ({
  centAmount: formData.price * 100,
  currencyCode: 'EUR',
  fractionDigits: 2,
});

export const handleAvailability = (formData: TFormFields) => {
  const nonRecurring = formData.availability.nonRecurring.map((nonRecurr) => {
    if (nonRecurr.date instanceof Date) {
      return {
        startDate: new Date(
          nonRecurr.date.getUTCFullYear(),
          nonRecurr.date.getUTCMonth(),
          nonRecurr.date.getUTCDate(),
          nonRecurr.startTime,
          0
        ).toISOString(),
        endDate: new Date(
          nonRecurr.date.getUTCFullYear(),
          nonRecurr.date.getUTCMonth(),
          nonRecurr.date.getUTCDate(),
          nonRecurr.endTime,
          0
        ).toISOString(),
      };
    }
  });

  return {
    recurring: formData.availability.recurring,
    nonRecurring,
  };
};
