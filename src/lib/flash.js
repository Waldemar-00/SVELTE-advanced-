// @ts-nocheck
export function flash(element) {
	requestAnimationFrame(() => {
		element.style.transition = 'none';
		element.style.color = 'rgba(255,62,0,1)';
		element.style.backgroundColor = 'rgba(255,62,0,0.4)';

		setTimeout(() => {
      element.style.transition = 'color 1s, background 1s';
      element.style.transition = 'all 1s';
			element.style.color = '';
			element.style.backgroundColor = '';
		});
  } );
}
