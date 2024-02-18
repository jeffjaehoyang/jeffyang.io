/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

const NavLink = ({
  href,
  ...rest
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'mr-6 hidden rounded-lg transition-all md:inline-block'
        )}
        {...rest}
      />
    </Link>
  );
};

export default NavLink;
