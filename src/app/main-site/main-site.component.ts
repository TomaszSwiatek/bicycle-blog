import { AgreementDialogComponent } from "./agreementDialog.component";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-main-site",
  templateUrl: "./main-site.component.html",
  styleUrls: ["./main-site.component.scss"]
})
export class MainSiteComponent implements OnInit {
  tabLinks: [
    {
      path: "./";
      label: "Europe";
    },
    {
      path: "./";
      label: "Poland";
    }
  ];

  termsOfUseAgreed: boolean = false;

  // store terms of use agreement
  StorageAgreementTermsOfUse: boolean = JSON.parse(
    localStorage.getItem("StorageAgreementTermsOfUse")
  );
  constructor(private agreementDialog: MatDialog) {}

  ngOnInit() {
    console.log(
      "storage terms of use at start: " + this.StorageAgreementTermsOfUse
    );
    // checks is agreement everclicked? is the storage variable = true ?
    if (!this.StorageAgreementTermsOfUse) {
      const agreementDialogRef = this.agreementDialog.open(
        AgreementDialogComponent
      );
      // is user click button yes (subscribe method binded to data in agreementDialog template) we store boolean value == true in localStorage to no longer show dialog.
      agreementDialogRef.afterClosed().subscribe(result => {
        localStorage.setItem(
          "StorageAgreementTermsOfUse",
          JSON.stringify(result)
        );
      });
    }
  }
}
