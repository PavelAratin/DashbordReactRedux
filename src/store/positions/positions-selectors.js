export const selectALLPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) {
    return state.positions
  }
  return state.positions.filter(pos => {
    const posFilters = [].concat(pos.role, pos.level, ...pos.languages);
    return filters.every(filter => posFilters.includes(filter))
  })
}
//проебан ...tools после ...pos.languages