export interface Http {
get<T>(url: string, params?: any  ): Promise<T>
}
class Axios implements Http {
  get<T=any, P=any>(url:string, params: P): Promise<T> {
    return Promise.resolve (params as any);
  }
}

const service = new Axios ();

export interface  LoginParams {
  username: '';
  password: ''
}


export const  login = (params: LoginParams ) => service.get<any, LoginParams> ('url',params)

login ({
  username: '',
  password: '',
})


function test (str: string) {
  if (str==='123') {
    return str;
  }

  if (str==='666') {
    console.log('6666')
    return str;
  } else {
    console.log('88888')
  }

}