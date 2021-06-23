// Type definitions

/**
 * A redux action
 * @typedef {{type: string}} action
 */

/**
 * An action creator
 * @typedef {() => action} actionCreator
 */

/**
 * An object id
 * @typedef {string} id
 */

/**
 * A post
 * @typedef {{
 *   id: number,
 *   title: string,
 *   points: number,
 *   user: string,
 *   time: number,
 *   time_ago: string,
 *   comments_count: number,
 *   type: string,
 *   url: string,
 *   domain: string
 * }} post
 */

/**
 * Definition for posts
 * @typedef {{
 *  id: {
 *     id: number,
 *     title: string,
 *     points: number,
 *     user: string,
 *     time: number,
 *     time_ago: string,
 *     comments_count: number,
 *     type: string,
 *     url: string,
 *     domain: string
 *  }
 * }} posts
 */

/**
 * A route
 * @typedef {{
 * path: string,
 * component: object,
 * exact: boolean,
 * private?: boolean
 * }} route
 */

/**
 * Definition for state
 * @typedef {{posts: posts}} state
 */

/**
 * Redux store
 * @typedef {object} store
 * @property {() => action} dispatch - Dispatches actions or action creators
 * @property {function} getState - Returns current state
 * @property {function} subscribe - Adds functions to execute on state change
 */
