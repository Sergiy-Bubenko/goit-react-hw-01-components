import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}> {title}</h2>}
      <ul className={s.statList}>
        {stats.map(stat => {
          return (
            <li className={s.item} key={stat.id}>
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: 'Upload stats',
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
