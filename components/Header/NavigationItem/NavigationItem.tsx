'use client';

import Link from 'next/link';
import React from 'react';

import cx from 'clsx';
import { motion } from 'framer-motion';

import NavigationLink from '@/types/link';

import styles from './NavigationItem.module.scss';

interface NavigationItemProps extends NavigationLink {
  activeHref: string;
  handleClick: (e: React.MouseEvent) => void;
}

const NavigationItem = ({ text, href, activeHref, handleClick }: NavigationItemProps) => {
  const selected = activeHref === href;

  return (
    <Link href={href} className={cx(styles.container, { [styles.selected]: selected })} onClick={handleClick}>
      {text}
      {selected && <motion.div className={styles.selection} layoutId="selected" transition={{ duration: 0.3 }} />}
    </Link>
  );
};

export default NavigationItem;
