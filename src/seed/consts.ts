import { v4 as uuidv4 } from 'uuid';

export const SETTING_APP_ID = `${process.env.APP_NAME}-setting-app-id`;

export const USER_DEFAULT_ID = process.env.USER_ID;
export const DATA_TYPE_TEXT_ID = 'data-type-type-text';
export const DATA_TYPE_FILE_SELECT_ID = 'data-type-type-file-select';

export const FILE_VIEW_RECOVERY_ID = 'files-file-view-recovery';
export const FILE_VIEW_REGISTRATION_ID = 'files-file-view-registration';

export const LETTER_STATUS_ACTIVE_ID = 'mail-letter-status-active';

export const LETTER_BASE_RECOVERY_ID = 'mail-letter-base-recovery';
export const LETTER_BASE_REGISTRATION_ID = 'mail-letter-base-registration';

export const TEMPLATE_STATUS_ACTIVE_ID = 'mail-template-status-active';

export const TEMPLATE_OPTION_VIEW_ID = 'mail-template-option-view';

export const TEMPLATE_BASE_RECOVERY_ID = 'mail-template-base-recovery';
export const TEMPLATE_BASE_REGISTRATION_ID = 'mail-template-base-registration';

export const TEMPLATE_BASE_RECOVERY_OPTION_VIEW_ID = uuidv4();
export const TEMPLATE_BASE_REGISTRATION_OPTION_VIEW_ID = uuidv4();

export const TEMPLATE_BASE_RECOVERY_OPTION_VIEW_CONTENT_ID = uuidv4();
export const TEMPLATE_BASE_REGISTRATION_OPTION_VIEW_CONTENT_ID = uuidv4();

export const REPORT_STATUS_SEND_ID = 'mail-report-status-send';
export const REPORT_STATUS_SENT_ID = 'mail-report-status-sent';
