

/**
 * @description
 */
export class BiohOptionSelect {


  private _label: string;
  private _payload: any;
  private _selected: boolean;


  constructor (label: string, payload?: any, selected?: boolean) {
    this._label = label || undefined;
    this._payload = payload || undefined;
    this._selected = selected || false;
  }// Constructor


  public get label() {
    return this._label;
  }// Label

  public get payload() {
    return this._payload;
  }// Payload

  public set label(newLabel: string) {
    this.label = newLabel || undefined;
  }// NewLabel

  public set payload(newPayload: any) {
    this._payload = newPayload || undefined;
  }// Payload

  public get selected() {
    return this._selected;
  }// Selected

  public set selected(newState: boolean) {
    this._selected = newState;
  }// Selected

}// BiohOptionSelect

