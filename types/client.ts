import {TLocation} from './location';

export type TClient = {
  id: string;
  name: string;
  locations: TLocation[];
};
