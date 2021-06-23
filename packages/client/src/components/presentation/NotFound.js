// Module imports
import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * NotFound component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <NotFound />
 */
export default function NotFound() {
  return <Redirect to="/" />;
}
