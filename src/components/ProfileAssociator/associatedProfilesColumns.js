import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Icon,
} from '@folio/stripes/components';

import { stringToWords } from '../../utils';
import { listTemplate } from '..';

import sharedCss from '../../shared.css';
import css from './ProfileAssociator.css';

export const associatedProfilesColumns = ({
  entityKey,
  isStatic,
  isMultiSelect,
  searchTerm,
  selectRecord,
  selectedRecords,
  onRemove,
}) => {
  const formatter = listTemplate({
    entityKey,
    searchTerm,
    selectRecord,
    selectedRecords,
  });
  const entityName = stringToWords(entityKey).map(word => word.toLocaleLowerCase()).join('-');

  if (!isStatic) {
    if (!isMultiSelect) {
      return formatter;
    }

    return {
      ...formatter,
      unlink: record => (
        <Button
          data-test-profile-unlink
          size="medium"
          buttonStyle="default"
          buttonClass={css['button-unlink']}
          marginBottom0
          onClick={() => onRemove(record)}
        >
          <Icon
            size="medium"
            icon="unlink"
            className={sharedCss.cellAppIcon}
          />
        </Button>
      ),
    };
  }

  return {
    ...formatter,
    name: record => (
      <Button
        data-test-profile-link
        buttonStyle="link"
        marginBottom0
        to={`/settings/data-import/${entityName}/view/${record.id}`}
        buttonClass={sharedCss.cellLink}
      >
        {formatter.name(record)}
      </Button>
    ),
  };
};

associatedProfilesColumns.propTypes = {
  entityKey: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  selectRecord: PropTypes.func.isRequired,
  selectedRecords: PropTypes.instanceOf(Set).isRequired,
  isMultiSelect: PropTypes.bool,
};
