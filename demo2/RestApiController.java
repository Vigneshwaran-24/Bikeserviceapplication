package com.example.demo.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class RestApiController {

	private final static String url = "jdbc:postgresql://localhost:5433/demo";
	private final static String user = "postgres";
	private final static String password = "12345";

	static String displayAllSql = "SELECT * FROM sports_person_details ORDER BY id ASC;";
	private static final String insertSql = "INSERT INTO sports_person_details (ID,NAME,AGE,COUNTRY,SPORT,MEDALS)VALUES(?,?,?,?,?,?);";
	String displaySql = "SELECT id,name,age,country,sport,medals FROM sports_person_details WHERE id=?;";

	@GetMapping("/example")
	public static String getApiExample() {
		try (Connection connection = DriverManager.getConnection(url, user, password);
				Statement s = connection.createStatement();) {
			System.out.println("Database connected successfully...");
		} catch (SQLException e) {

			System.out.println();

		}
		return "API generted . Check Console !!";

	}

	@GetMapping("/display/{id}")
	public ResponseEntity<String> display(@PathVariable int id) throws SQLException {
		Scanner s2 = new Scanner(System.in);

		try (Connection connection = DriverManager.getConnection(url, user, password);
				PreparedStatement pstatement = connection.prepareStatement(displaySql);) {
			System.out.println("Entered Id to display: " + id);
			pstatement.setInt(1, id);
			ResultSet rs = pstatement.executeQuery();

			// System.out.println(pstatement);

			while (rs.next()) {
				int id1 = rs.getInt("id");
				String name = rs.getString("name");
				int age = rs.getInt("age");
				String country = rs.getString("country");
				String sport = rs.getString("sport");
				int medals = rs.getInt("medals");

				System.out.println("ID: " + id1 + " ---- Name: " + name + " ---- Age: " + age + " ---- Country: "
						+ country + " ---- Sport: " + sport + " ---- Medals: " + medals);

			}

			// System.out.println(rs);
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}
		return ResponseEntity.ok("Displayed...");
	}

	@GetMapping("/displayall")
	public static String displayAllSql() {
		try (Connection connection = DriverManager.getConnection(url, user, password);
				PreparedStatement pstatement = connection.prepareStatement(displayAllSql);) {

			System.out.println("Data in the database are listed below...");
			System.out.println();

			ResultSet rs = pstatement.executeQuery();

			// System.out.println(pstatement);

			while (rs.next()) {
				int id1 = rs.getInt("id");
				String name = rs.getString("name");
				int age = rs.getInt("age");
				String country = rs.getString("country");
				String sport = rs.getString("sport");
				int medals = rs.getInt("medals");

				System.out.println("ID: " + id1 + " ---- Name: " + name + " ---- Age: " + age + " ---- Country: "
						+ country + " ---- Sport: " + sport + " ---- Medals: " + medals);

			}

			// System.out.println(rs);
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}
		return "Displayed the database in Console...";

	}

	@DeleteMapping("/delete/{n}")
	public ResponseEntity<String> delete(@PathVariable("n") int n) throws SQLException {
		// System.out.println("Enter the ID to be deleted :");
		// Scanner s1 = new Scanner(System.in);
		// n = s1.nextInt();
		String deleteSql = "DELETE FROM sports_person_details WHERE ID=" + n;
		// System.out.println(deleteSql);
		try (Connection connection = DriverManager.getConnection(url, user, password);
				Statement s = connection.createStatement();) {
			PreparedStatement pstatement = connection.prepareStatement(deleteSql);
			pstatement.executeUpdate();
			System.out.println("The  row " + n + " has been deleted..");

			ResultSet rs = s.executeQuery(displayAllSql);

			while (rs.next()) {
				int id = rs.getInt("id");
				String name = rs.getString("name");
				int age = rs.getInt("age");
				String country = rs.getString("country");
				String sport = rs.getString("sport");
				int medals = rs.getInt("medals");
				System.out.println("ID: " + id + " ---- Name: " + name + " ---- Age: " + age + " ---- Country: "
						+ country + " ---- Sport: " + sport + " ---- Medals: " + medals);
			}

		} catch (SQLException e) {
			System.out.println();
		}

		return ResponseEntity.ok("Deleted");
	}

	@PostMapping("/insert")
	public ResponseEntity<String> insert(int id, String name, int age, String country, String sport, int medals)
			throws SQLException {

		// System.out.println(insertSql);
		try (Connection connection = DriverManager.getConnection(url, user, password);
				Statement s = connection.createStatement();) {

			PreparedStatement pstatement = connection.prepareStatement(insertSql);
			// int count = 0;
			Scanner sc = new Scanner(System.in);
			// System.out.println("Enter the no. of rows to insert :");
			// id = sc.nextInt();
			// for (int i = 0; i < id; i++) {
			// System.out.println("Enter the ID---> ");
			pstatement.setInt(1, id);
			// System.out.println("Enter the Name ---> ");
			pstatement.setString(2, name);
			// System.out.println("Enter the age ---> ");
			pstatement.setInt(3, age);
			// System.out.println("Enter the Country --->");
			pstatement.setString(4, country);
			// System.out.println("Enter the Sport ---> ");
			pstatement.setString(5, sport);
			// System.out.println("Enter no. of medals they won ---> ");
			pstatement.setInt(6, medals);

			//pstatement.addBatch();
			pstatement.executeUpdate();
			System.out.println("All values are inserted...");

			sc.close();

		} catch (Exception e) {
			System.out.println();
		}
		return ResponseEntity.ok("Inserted");
	}

}
