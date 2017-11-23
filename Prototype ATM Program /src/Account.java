/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Ousai
 */


public class Account {

	int accountNumber;
	double accountBalance;
	String accountOwner;
	int pin;

public void Account() {
	accountNumber = 0;
	accountBalance = 0.0;
	accountOwner = null;
	pin = 0;
} //end constructor

public void setAccNo(int newAccNo) {
	accountNumber = newAccNo;
} //end setAccNo

public int getAccNo() {
	return accountNumber;
} //end getAccNo

public void setPinNo(int newPin) {
	pin = newPin;
} // end setPinNo

public int getPinNo() {
	return pin;
} // end getPinNo

public double getBalance() {
	return accountBalance;
} //end getBalance

public void setOwner(String newOwner) {
	accountOwner = newOwner;
}

public String getOwner() {
	return accountOwner;
} //end getOwner

public void deposit(double addBalance) {
	accountBalance += addBalance;
} //end deposit

public void withdraw(double drawBalance) {
	accountBalance -= drawBalance;
} //end withdraw

} //end class Account