import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccoutItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7e0e9d6804352eb1957ea2736e923ea2~c5_300x300.webp?x-expires=1693018800&x-signature=Rz0keq2vBGXzSZE%2F%2Fgo2TyCTIQA%3D"
        alt="dsadsa"
      ></img>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>Nguyen Van A</span>
      </div>
    </div>
  );
}

export default AccountItem;
