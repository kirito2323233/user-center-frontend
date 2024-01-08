import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = '羡渊出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined/> 羡渊 GitHub</>,
          href: 'https://github.com/kirito2323233?tab=projects',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
