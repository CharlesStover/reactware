import { ComponentType, LazyExoticComponent, lazy } from 'react';

type ComponentFactory<Props> = () => Promise<{ default: ComponentType<Props> }>;

export default function mapComponentFactoryToLazyExoticComponent<Props>(
  factory: ComponentFactory<Props>,
): LazyExoticComponent<ComponentType<Props>> {
  return lazy(factory);
}
