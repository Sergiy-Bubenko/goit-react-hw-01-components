import PropTypes from 'prop-types';

export function Gallery({ d, i }) {
  return (
    <section>
      <h2>Gallery</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
        deserunt.
      </p>
      <a>{d}</a>
      <ul>
        <li>1</li>
      </ul>
    </section>
  );
}

Gallery.defaultProps = {
  d: 'Default text for description',
};

Gallery.propTypes = {
  d: PropTypes.string,
  i: PropTypes.string,
};
