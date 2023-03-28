import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertIcon, SweetAlertResult,  } from 'sweetalert2';

@Injectable({
  providedIn: 'root' 
})
export class MessageBoxService {

 
  public static showSuccess(title: string, message: string, reloadPage: boolean): Promise<MessageBoxResult> {

    return this.show(title, message, 'success', MessageBoxbutton.Ok, reloadPage)
  }

  public static showError(title: string, message: string, reloadPage: boolean): Promise<MessageBoxResult> {

    return this.show(title, message, 'error', MessageBoxbutton.Ok, reloadPage)
  }

  public static showConfirm(title: string, message: string): Promise<MessageBoxResult> {

    return this.show(title, message, 'question', MessageBoxbutton.OkCancel, false)
  }

  public static show(title: string, message: string, icon: SweetAlertIcon, buttons: MessageBoxbutton, reloadPage: boolean): Promise<MessageBoxResult> {

    let pPromise: Promise<MessageBoxResult>;
    let messageBoxResult: MessageBoxResult;

    let options = {
      title: title, text: message, allowOutsideClick: false, icon: icon,
      showConfirmButton: false, showDenyButton: false, showCancelButton: false,
      confirmButtonColor: '#3085d6', denyButtonColor: '#dd6b55', cancelButtonColor: '#aaa'
    } as SweetAlertOptions;


    switch (buttons) {
      case MessageBoxbutton.YesNo:
        options.showConfirmButton = true;
        options.showDenyButton = true;
        options.confirmButtonText = 'Si';
        options.denyButtonText = 'No';
        break;
      case MessageBoxbutton.YesNoCancel:
        options.showConfirmButton = true;
        options.showDenyButton = true;
        options.showCancelButton = true;
        options.confirmButtonText = 'Si';
        options.denyButtonText = 'No';
        options.cancelButtonText = 'Cancelar';
        break;
      case MessageBoxbutton.OkCancel:
        options.showConfirmButton = true;
        options.showCancelButton = true;
        options.confirmButtonText = 'Aceptar';
        options.cancelButtonText = 'Cancelar';
        break;
      default:
        options.showConfirmButton = true;
        options.confirmButtonText = 'Aceptar';
        break;
    }

    pPromise = new Promise<MessageBoxResult>((resolve: (arg0: MessageBoxResult) => void) => {
      Swal.fire(options).
        then((result) => {
          messageBoxResult = this.sweetAlertResultToMessageBoxResult(result, buttons);
          resolve(messageBoxResult);
          if (reloadPage) {
            location.reload();
          }
        });
    })


    return pPromise;
}
private static sweetAlertResultToMessageBoxResult(sweetResult: SweetAlertResult, buttons: MessageBoxbutton): MessageBoxResult {

  let messageBoxResult: MessageBoxResult;

  switch (buttons) {
    case MessageBoxbutton.YesNo:
    case MessageBoxbutton.YesNoCancel:
      messageBoxResult = MessageBoxResult.Cancel;

      if (sweetResult.isConfirmed) {
        messageBoxResult = MessageBoxResult.Yes;
      }

      if (sweetResult.isDenied) {
        messageBoxResult = MessageBoxResult.No;
      }
      break;
    default:
      messageBoxResult = MessageBoxResult.Cancel;
      if (sweetResult.isConfirmed) {
        messageBoxResult = MessageBoxResult.Ok;
      }
      break;
  }

  return messageBoxResult;
}
}

export enum MessageBoxResult {
  Ok,
  Yes,
  No,
  Cancel
}

export enum MessageBoxbutton {
  Ok,
  YesNo,
  OkCancel,
  YesNoCancel
}
