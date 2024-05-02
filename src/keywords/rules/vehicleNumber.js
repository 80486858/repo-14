export default {
  errorMessage: () => {
    return "VIN должен быть длинной 17 символов и содержать только 0-9 и A,B,C,D,E,F,G,H,J,K,L,M,N,P,R,S,T,U,V,W,X,Y,Z";
  },
  condition: (value) => {
    const regex = /^([0-9ABCDEFGHJKLMNPRSTUVWXYZ]{17})$/;

    return regex.test(value);
  },
};
