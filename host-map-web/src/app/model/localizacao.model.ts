/**
 * Created by Werlon on 20/05/2017.
 */
export class Localizacao {


  constructor(
    public lat?: Number,
    public lon?: Number,
    public org?: String,
    public query?: String,
    public country?: String,
    public dataHora?: String,
    public dominio?: String) {

  }
}
