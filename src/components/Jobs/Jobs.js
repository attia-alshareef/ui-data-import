import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  AccordionSet,
  Accordion,
} from '@folio/stripes/components';

import { withStripes } from '@folio/stripes-core';
import {
  PreviewsJobs,
  RunningJobs,
} from './components';

import css from './Jobs.css';

export const Jobs = withStripes(memo(({ stripes: { locale } }) => (
  <div
    className={css.jobsPane}
    key={locale}
  >
    <AccordionSet>
      <Accordion
        label={(
          <span data-test-preview-jobs-accordion-title>
            <FormattedMessage id="ui-data-import.previewJobs" />
          </span>
        )}
        separator={false}
      >
        <PreviewsJobs />
      </Accordion>
      <Accordion
        label={(
          <span data-test-running-jobs-accordion-title>
            <FormattedMessage id="ui-data-import.runningJobs" />
          </span>
        )}
        separator={false}
      >
        <RunningJobs />
      </Accordion>
    </AccordionSet>
  </div>
)));

Jobs.propTypes = { stripes: PropTypes.object };
