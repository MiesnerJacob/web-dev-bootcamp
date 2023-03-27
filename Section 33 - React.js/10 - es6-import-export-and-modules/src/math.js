const pi = Math.PI.toFixed(6);

function piSquared() {
  return (pi ** 2).toFixed(6);
}

function piCubed() {
  return (pi ** 3).toFixed(6);
}

export default pi;
export { piSquared, piCubed };
