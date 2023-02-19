package io.CSVuploader.employeedatatool.employee;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Service
public class EmployeeService {
    private EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    public ResponseEntity getAllEmployees(){

        return ResponseEntity.ok().body(employeeRepository.findAll());
    }

    public ResponseEntity<Employee> addEmployee(Employee employee){
        System.out.println(employee.toString());
        Employee savedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(savedEmployee);
    }

    public ResponseEntity uploadData(MultipartFile file) {

        List<Employee> employeeList = new ArrayList<>();

        try(InputStream inputStream = file.getInputStream()){

            if ( employeeRepository.count() != 0){
                return ResponseEntity
                        .badRequest()
                        .body("File upload failed: A file has already been uploaded");
            }

            Scanner scanner = new Scanner(inputStream);

            scanner.nextLine();

            while(scanner.hasNextLine()){

                String[] parts = scanner.nextLine().split(";");

                Employee employee = new Employee();

                employee.setName(parts[0]);
                employee.setEmail(parts[1]);
                employee.setPhoneNumber(parts[2]);

                employeeList.add(employee);
            }

            employeeRepository.saveAll(employeeList);

            return ResponseEntity.ok(employeeList);

        }catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }



    }


}
