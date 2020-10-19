import React from 'react';
import { ReactElement } from 'react';
import useApp from './app.hook';

export default function App(): ReactElement {
  const { Game } = useApp();
  return <Game />;
}
