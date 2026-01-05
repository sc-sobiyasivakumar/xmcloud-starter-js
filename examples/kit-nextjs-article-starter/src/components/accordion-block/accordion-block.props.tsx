import type { Field, LinkField, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';
// Intentional lint error for testing workflow - unused import
import React from 'react';

/**
 * Model used for Sitecore Component integration
 */
export type AccordionProps = ComponentProps &
  AccordionFields & {
    isPageEditing?: boolean;
  };

export interface AccordionFields {
  fields?: {
    data?: {
      datasource?: {
        heading?: { jsonValue: Field<string> };
        description?: { jsonValue: Field<string> };
        link?: { jsonValue: LinkField };
        children?: {
          results?: AccordionItemProps[];
        };
      };
    };
  };
}

export type AccordionItemProps = {
  heading?: {
    jsonValue?: Field<string>;
  };
  description?: {
    jsonValue?: RichTextField;
  };
};
