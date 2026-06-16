import Swal from 'sweetalert2';

export const swalDark = Swal.mixin({
  customClass: {
    popup: 'swal-dark',
    confirmButton: 'swal-dark-btn swal-dark-btn--confirm',
    cancelButton: 'swal-dark-btn swal-dark-btn--cancel',
  },
  buttonsStyling: false,
  background: 'transparent',
  color: '#eee',
  backdrop: 'rgba(0, 0, 0, 0.65)',
});
