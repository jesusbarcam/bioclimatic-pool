

/**
 * @description
 */
export class BiohOptionSelect {


  private _label: string;
  private _value: string;
  private _selected: boolean;
  private _payload: any;


  constructor (label: string, value?: string, selected?: boolean, payload?: any) {
    this._label = label || undefined;
    this._value = value || undefined;
    this._selected = selected || false;
    this._payload = payload || undefined;
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

  public get value() {
    return this._value;
  }// Payload

  public set value(newValue: string) {
    this._value = newValue;
  }// Value

}// BiohOptionSelect

