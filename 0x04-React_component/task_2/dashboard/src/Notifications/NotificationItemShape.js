import PropTypes from 'prop-types';

export const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});
